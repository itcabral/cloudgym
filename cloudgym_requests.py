import requests
import json

HTTP_HEADERS = {'user-agent': 'Mozilla/5.0 (Windows NT 10.0; ) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4086.0 Safari/537.36'}
URL_GET_AULAS = 'http://cloudgym.com.br/cloudgym/rest/workout/classes/'
URL_REGISTER_CLASS = 'https://cloudgym.com.br/cloudgym/rest/workout/registerclassattendence/'

def register_class(email, birthday, date, id):
    url = URL_REGISTER_CLASS + str(email) + '/' + str(birthday) + '/' + str(date) + '/' + str(id)
    req = requests.post(url=url, headers=HTTP_HEADERS)
    return req.content

def get_aulas(email, birthday):    
    url = URL_GET_AULAS + str(email) + '/' + str(birthday)
    req = requests.get(url=url, headers=HTTP_HEADERS)
    content = json.loads(req.content.decode('utf8').replace("'", '"'))
    return content

def response_code_translator(response):
    print(response)
    for (i, value) in enumerate(response):
        if b'-15' in value:
            response[i] = "Já Registrado!"
        elif b'-17' in value:
            response[i] = "Vagas Indisponíveis!"
        elif b'ok' in value:
            response[i] = "Sucesso!"
        else:
            continue
    return response