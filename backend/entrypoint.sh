#!/bin/sh

echo "🐋  Starting ..."

# Install global dependencies
cd /app && npm i 

#Layer dependencies
cd /app/layers/@dynamo && npm i 

#Install method dependencies
cd /app/hello_world && npm i && ln -s /app/layers/@dynamo/ /app/hello_world/
#cd /app/user/create && npm i && ln -s /app/layers/@dynamo/ /app/user/create/
#cd /app/user/get-all && npm i
#cd /app/user/get-by-id && npm i && ln -s /app/layers/@dynamo/ /app/user/get-by-id/

# RUN 
cd /app && nodemon --watch /app --ext 'js,yml,json' --exec 'serverless offline'

