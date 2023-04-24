FROM ubuntu:22.04

WORKDIR /opt/app

RUN apt-get update
RUN apt-get install -y curl
RUN apt-get install -y watchman
RUN apt-get install -y openjdk-11-jdk
RUN apt-get install -y unzip
RUN apt-get install -y make

RUN curl -fsSL https://deb.nodesource.com/setup_16.x -o /tmp/nodesource_setup.sh
RUN bash /tmp/nodesource_setup.sh
RUN apt-get update
RUN apt-get install -y nodejs
RUN npm i -g yarn

COPY __tests__ __tests__
COPY .bundle .bundle
COPY android android
COPY e2e e2e
COPY .buckconfig .detoxrc.js .eslintrc.js .flowconfig .node-version .ruby-version .watchmanconfig ./
COPY App.js Gemfile app.json babel.config.js index.js metro.config.js package.json yarn.lock ./

RUN yarn

RUN curl https://dl.google.com/android/repository/commandlinetools-linux-9477386_latest.zip -o /tmp/commandlinetools-linux-9477386_latest.zip
RUN mkdir -p /opt/android/sdk/cmdline-tools
RUN cd /opt/android/sdk/cmdline-tools && unzip /tmp/commandlinetools-linux-9477386_latest.zip && mv cmdline-tools latest
ENV ANDROID_SDK_ROOT="/opt/android/sdk"
ENV ANDROID_HOME="/opt/android/sdk"
ENV PATH="$PATH:$ANDROID_SDK_ROOT/cmdline-tools/latest/bin"
# CMD echo $HOME && echo $PATH && find /opt/android/sdk && sdkmanager --list
RUN yes | sdkmanager --licenses
# CMD ls && ls android/
RUN yarn detox build --configuration android.emu.debug

RUN yarn add wait-on concurrently

ENV PATH="$PATH:$ANDROID_SDK_ROOT/emulator"

# CMD yarn detox test --headless --configuration android.emu.debug
# CMD find . -name "*.apk" && ls -l ./android/app/build/outputs/apk/debug/ && ls -l ./android/app/build/outputs/apk/androidTest/debug/
RUN sdkmanager "system-images;android-31;google_apis;x86_64"
RUN echo no | avdmanager create avd -n Pixel_3a_API_33_x86_64 -k "system-images;android-31;google_apis;x86_64"
CMD yarn concurrently "yarn react-native start" "wait-on tcp:8081 && yarn detox test --headless --configuration android.emu.debug"
# CMD sdkmanager --list_installed
# CMD emulator -list-avds
# CMD ls /opt/android/sdk/emulator