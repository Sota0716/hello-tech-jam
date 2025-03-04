FROM mcr.microsoft.com/devcontainers/base:bullseye
 
RUN apt-get update && apt-get install --no-install-recommends -y \
    locales \
    jq \
    bash-completion \
    tzdata \
    \
    # 日本語化設定
    && sed -i 's/^# *\(ja_JP.UTF-8 UTF-8\)/\1/' /etc/locale.gen \
    && locale-gen \
    && localedef -i ja_JP -f UTF-8 ja_JP.UTF-8 \
    && echo 'LANG=ja_JP.UTF-8' > /etc/default/locale \
    && echo 'LC_ALL=ja_JP.UTF-8' >> /etc/default/locale \
    && echo 'LANG=ja_JP.UTF-8' > /etc/locale.conf \
    && echo 'LC_ALL=ja_JP.UTF-8' >> /etc/locale.conf \
    \
    # タイムゾーンを日本時間に設定
    && ln -fs /usr/share/zoneinfo/Asia/Tokyo /etc/localtime \
    && dpkg-reconfigure -f noninteractive tzdata \
    \
    # 不要なキャッシュを削除し、コンテナサイズを軽量化
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
 
ENV LANG=ja_JP.UTF-8
ENV LANGUAGE=ja_JP.UTF-8
ENV LC_ALL=ja_JP.UTF-8
ENV TZ=Asia/Tokyo
