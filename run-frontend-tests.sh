#!/bin/bash
docker-compose -f docker-compose.yml -f docker-compose.test.frontend.yml up --exit-code-from web-frontend web-frontend