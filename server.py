# Импортируем библиотеки для работы с сетью
import http.server
import socketserver

# Выбираем 8000 порт для подключения
PORT = 8000

# Создаём класс для обработки HTTP-запросов
# (При GET-запросе выдаём файл "index.html")
class MyHttpRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self) -> None:
        self.path = "index.html"
        return super().do_GET()

# Создаём экземпляр класса
Handler = MyHttpRequestHandler

# Запускаем сервер на 8000 порту
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("Http Server Serving at port", PORT)
    httpd.serve_forever()
