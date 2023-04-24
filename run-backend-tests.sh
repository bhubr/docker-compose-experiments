#!/bin/bash
docker-compose -f docker-compose.yml -f docker-compose.test.backend.yml up mysql backend --exit-code-from backend