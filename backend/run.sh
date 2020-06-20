#https://github.com/nojhan/colout

function up {
    docker-compose up
}

function noCache {
    docker-compose build --no-cache
}

if [ $# -eq 0 ]
  then
    up
else
    if [ $1 == '--no-cache' ]
    then    
        noCache
    else
        echo "Not implemented"
    fi
    up
fi