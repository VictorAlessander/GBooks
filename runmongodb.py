import os
import pathlib
import subprocess

MONGODB_PATH = '/data/db/'
basedir = os.path.abspath('.')

print('[+] Creating directory for mongod if not exists...')

pathlib.Path(basedir + MONGODB_PATH).mkdir(
  parents=True,
  exist_ok=True) if not os.path.exists(basedir + MONGODB_PATH) else print('[-] Nothing to do.')

print('[+] Starting mongod')

mongod = subprocess.Popen(
  'mongod --dbpath ./data/db',
  shell=True,
  preexec_fn=os.setsid)

try:
  mongod.wait()
except KeyboardInterrupt:
  mongod.terminate()