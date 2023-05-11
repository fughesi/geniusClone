file = request.FILES['filename']
file.name # Gives name
file.content_type # Gives Content type text/html etc
file.size # Gives file's size in byte
file.read() # Reads file
