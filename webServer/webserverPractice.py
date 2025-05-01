from http.server import BaseHTTPRequestHandler, HTTPServer
import datetime
hostName = "localhost"
serverPort = 8080

import psycopg2 #for connecting to a sql database
from urllib.parse import urlparse, parse_qs #python library that reads url data

#imports for nwl 
import urllib.request
import json



class BasicServer(BaseHTTPRequestHandler):
    def getWeather(self, long, lat) :
        #creating url for nwl
        url = "https://api.weather.gov/points/" + str(long) + "," + str(lat)

        try :
            response1 = urllib.request.urlopen(url) #opens url into a scread
            jsonResponse1 = response1.read().decode("utf-8") #decodes the string response
            json1 = json.loads(jsonResponse1) #load the string
            forecastUrl = json1["properties"]["forecast"] #has the forecast url

            response2 = urllib.request.urlopen(forecastUrl) #opens up the weather url
            jsonResponse2 = response2.read().decode('utf-8')
            json2 = json.loads(jsonResponse2)
            forecast = json2["properties"]["periods"][0]["detailedForecast"] #key value
            print(forecast)

        except urllib.error.URLError as e :
            print("Error reading weather:", e)


    def formatDate(self, dateString):
        date = dateString[0][0] #access inside the list and then access inside the tuple
        return date.strftime("%Y-%m-%d %H:%M:%S") #built in datetime python function to format the data


    def readURL(self) :
        urlInput = urlparse(self.path) #reading the url information
        queryInformation = parse_qs(urlInput.query) #splits the url information into a dictionary
        if queryInformation :
            userID = int(queryInformation['id'][0])
            userLong = queryInformation['long'][0]
            userLat = queryInformation['lat'][0]
            return userID, userLong, userLat
        return "", "", ""

    def connect(self, script) :
        conn = None
        try:  
            print("connecting")
            conn = psycopg2.connect(
                dbname="postgres", #this is database name not table name
                user="postgres",
                password="Temporary123",
                host="localhost"
            )

            #cursor for statements
            cur = conn.cursor()

            cur.execute(script) #execute to do the actual SQL commands
            fetchedData = cur.fetchall() #fetchall to fetch the data from the SQL command
            return fetchedData
        except (psycopg2.DatabaseError) as error :
            print(error) #in case there is an error in the database
        finally:
            if conn is not None:
                conn.close() #closing the database connection
                print('Database connection closed')

    def do_GET(self):
        self.send_response(200) #status code for a successful request
        self.send_header("Content-type", "text/html") #adds header data to http response (name of header and value)
        self.end_headers()
        
        userID, userLong, userLat = self.readURL()
        print(userID, userLong, userLat)
        if (userID != ""):
            '''
            
            sqlCode = ("SELECT * FROM usertable WHERE userid = %s" % userID)
            data = self.connect(sqlCode)
            '''
            date = self.connect("SELECT last_payment_time FROM usertable WHERE userid = %s" % userID)
            date = self.formatDate(date)
            phoneNumber = self.connect("SELECT phone_number FROM usertable WHERE userid = %s" % userID)
            imsi = self.connect("SELECT imsi FROM usertable WHERE userid = %s" % userID)
            self.getWeather(userLong, userLat)

        #just content on the page
        self.wfile.write(bytes("<html><head></head>", "utf-8"))
        self.wfile.write(bytes("<p>Requests: %s</p>" % self.path, "utf-8"))
        self.wfile.write(bytes("<body>", "utf-8"))
        self.wfile.write(bytes("<p> a web server </p>", "utf-8"))
        if (userID != "") :
            self.wfile.write(bytes("<div><h1> Output Information: </h1> <p> UserID: %s </p>" %userID, "utf-8"))
            self.wfile.write(bytes("<p> Last Payment Date: %s </p>" %date, "utf-8"))
            self.wfile.write(bytes("<p> Phone Number: %s </p>" %phoneNumber[0][0], "utf-8"))
            self.wfile.write(bytes("<p> imsi: %s </p>" %imsi[0][0], "utf-8"))
            self.wfile.write(bytes("</div>", "utf-8"))
        self.wfile.write(bytes("</body></html>", "utf-8"))

        

if __name__ == "__main__" :
    webServer = HTTPServer((hostName, serverPort), BasicServer) #starting the actual server
    print("Server url http://%s:%s" % (hostName, serverPort)) #creating link
    try :
        webServer.serve_forever() #keeping the terminal running
    except KeyboardInterrupt : #ctrl c in terminal
        pass

    webServer.server_close() #once keyboard interrupt, then close the webserver
    print("Server terminated")
