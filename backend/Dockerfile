FROM python:3.7

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY requirements.txt /usr/src/app

RUN pip install -r requirements.txt

ENTRYPOINT [ "flask" ]
CMD [ "run", "--host=0.0.0.0" ]
