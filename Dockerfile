# Build Stage 2: Copy Build Stage 1 files in to Stage 2. Install chromium dependencies and chromium.
FROM node:20-buster-slim
RUN apt-get update \
    && apt-get install -y x11-apps\
    && apt-get install -y wget gnupg chromium mesa-va-drivers libva-drm2 libva-x11-2 mesa-utils mesa-utils-extra nodejs npm fonts-noto-color-emoji\
    && apt-get update \
    && apt-get install -y fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst fonts-freefont-ttf libxss1 \
      --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*
RUN mkdir /var/ffmpeg && cd /var/ffmpeg
RUN wget https://johnvansickle.com/ffmpeg/releases/ffmpeg-release-amd64-static.tar.xz && \
    tar xvf ./ffmpeg-release-amd64-static.tar.xz --one-top-level=ffmpeg2 --strip-components 1 && \
    mv ${FUNCTION_DIR}/ffmpeg2 ${FUNCTION_DIR}/ffmpeg
