# Usando a imagem base do Python
FROM python:3.9

# Definindo o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copiando os arquivos de requisitos para o diretório de trabalho
COPY requirements.txt .

# Instalando as dependências da aplicação
RUN pip install --no-cache-dir -r requirements.txt

# Copiando o código da aplicação para o diretório de trabalho
COPY . .

# Expondo a porta em que a aplicação irá rodar (defina a porta correta para o Django)
EXPOSE 8000

# Comandos para executar as migrações do Django
RUN python manage.py makemigrations
RUN python manage.py migrate

# Comando para executar a aplicação
CMD ["python", "manage.py", "runserver","0.0.0.0:8000"]
