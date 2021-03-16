

Lambda(serverless) + Docker Image + API Gateway

## Create docker image for lambda and push to ECR

- docker build  

```sh
backend$ sudo docker build -t simulation-vr-test1 -f lambda/Dockerfile .   
```

- run for local test  

```sh
backend$ sudo docker run -p 9000:8080  simulation-vr-test1:latest 
```

- local test  

(from another terminal)  
```sh
$ curl -XPOST "http://localhost:9000/2015-03-31/functions/function/invocations" -d '{}'
```

Create repository from AWS console  
https://ap-northeast-1.console.aws.amazon.com/ecr/repositories?region=ap-northeast-1  


- Docker CLI Authentication  

```sh
$ sudo aws ecr get-login-password --region ap-northeast-1 | sudo docker login --username AWS --password-stdin [YOUR ID].dkr.ecr.ap-northeast-1.amazonaws.com
```

- Tagging  

```sh
$ sudo docker tag simulation-vr-test1:latest [YOUR ID].dkr.ecr.ap-northeast-1.amazonaws.com/vr-simulation-test
```

- Push to ECR  

```sh
$ sudo docker push [YOUR ID].dkr.ecr.ap-northeast-1.amazonaws.com/vr-simulation-test
```

## Deploy lambda

create serverless.yml  


- deploy to lambda

```sh
$ sls deploy
```
