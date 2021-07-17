#this is the base image / virtual light weight OS where our intended app will run on
FROM alpine 
#Pre-Req steps before we launch our app. eg: updation of packages / inclusion of dependencies etc.
RUN apk add --update redis
    
#This is the actual command that will run when we start our container. eg: start flask app etc
CMD ["redis-server"]

#https://docs.docker.com/language/python/build-images/