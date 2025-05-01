from http.server import BaseHTTPRequestHandler, HTTPServer
import datetime
import psycopg2
import uuid

from urllib.parse import urlparse, parse_qs

import urllib.request
import json

hostName = "localhost"
serverPort = 8080


class httpEndpoint(BaseHTTPRequestHandler) :
  def getWeather(self, longit, lat) :
    url = "https://api.weather.gov/points/" + str(longit) + "," + str(lat)

    try :
      inResponse = urllib.request.urlopen(url)
      jsonResponse = inResponse.read().decode("utf-8")
      inJson = json.loads(jsonResponse)
      jsonURL = inJson['properties']['forecast']

      weatherResponse = urllib.request.urlopen(jsonURL)
      weatherJsonResponse = weatherResponse.read().decode("utf-8")
      weatherJson = json.loads(weatherJsonResponse)
      forecast = weatherJson["properties"]["periods"][0]["detailedForecast"]
      return forecast
    except urllib.error.URLError as e :
      print("Error reading weather:", e)

  def accessTable(self, script) :
    conn = None
    try :
      conn = psycopg2.connect(
        dbname="coderpad",
        user="coderpad",
        host="/tmp/postgresql/socket"
        #have a password
      )

      cur = conn.cursor()
      #script = "SELECT * FROM subscribers WHERE subscriber_id::text =ED9951EC-477E-4A26-A5B4-1D9671B890BE"
      cur.execute(script)
      fetchedData = cur.fetchall()
      print(fetchedData)
      return fetchedData

    except (psycopg2.DatabaseError) as error :
      print(error)
    finally:
      if conn is not None:
        conn.close()

  def formatDate(self, dateString):
    date = dateString[0][0]
    return date.strftime("%Y-m-%d %H:%M:%S")

  def readURL(self)  :
    urlInput = urlparse(self.path)
    print(urlInput)
    queryInformation = parse_qs(urlInput.query) #normally use this to break apart strings
    print(queryInformation)
    if queryInformation :
      userID = queryInformation["id"][0]
      #userLong = queryInformation["long"][0]
      #userLat = queryInformation["lat"][0]
      return userID #, userLong, userLat
    return "", "", "" 

  def do_GET(self) :
    print("working") #not working for some reason?
    #should open up the server
    self.send_response(200)
    self.send_header("Content-type", "text/html")
    self.end_headers()
    # , userLong, userLat 
    userID= self.readURL()
    if (userID != "") :
      date = self.accessTable("SELECT last_payment_time FROM subscribers WHERE subscriber_id=%s;" % userID)
      date = self.formatDate(date)
      imsi = self.accessTable("SELECT imsi FROM subscribers WHERE subscriber_id=%s;" % userID)
      phoneNumber = self.accessTable("SELECT phone_number FROM subscribers WHERE subscriber_id=%s;" % userID)
      #weather = self.getWeather(userLong, userLat)

    self.wfile.write(bytes("<html><head></head><body>", "utf-8"))
    self.wfile.write(bytes("<h1> HTTP Endpoint </h1> <h3> Outputted Information </h3>", "utf-8"))
    self.wfile.write(bytes("<p>Last Payment Date: %s</p>" % date, "utf-8"))
    self.wfile.write(bytes("<p>Phone Number: %s</p>" % phoneNumber, "utf-8"))
    self.wfile.write(bytes("<p>imsi: %s</p>" % imsi, "utf-8"))
    #self.wfile.write(bytes("<p> Current Weather: %s</p>" %weather, "utf-8"))
    self.wfile.write(bytes("</body></html>", "utf-8"))

    


if __name__ == "__main__" :
  webServer = HTTPServer((hostName, serverPort), httpEndpoint)
  print("url: http://%s:%s" % (hostName, serverPort))
  try: 
    webServer.serve_forever()
  except KeyboardInterrupt:
    pass
  webServer.server_close()

