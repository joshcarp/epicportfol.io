#!/bin/bash

# Copy the sql from the mount point (/database/db.sql) to the docker-entrypoint-initdb.d
# The postgres container will take this as an initialiser and create the tables before it starts
cp /database/db.sql /docker-entrypoint-initdb.d/

# Execute postgres
docker-entrypoint.sh -c 'shared_buffers=256MB' -c 'max_connections=200'
postgres
