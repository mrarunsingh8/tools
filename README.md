# tools

#### Build your container: 

````cmd
docker build --no-cache -t nextjs-docker .
````

````
docker build -t nextjs-docker .
````


#### Run your container: 

````
docker run -p 3000:3000 nextjs-docker
````