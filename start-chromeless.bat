docker run --init -it --rm --name chrome --shm-size=1024m -d -p 9222:9222 --cap-add=SYS_ADMIN yukinying/chrome-headless-browser --headless --disable-gpu --hide-scrollbars --window-size=1280,800
