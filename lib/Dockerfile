FROM quay.io/maherzubair/sigma-md:beta
RUN git clone https://github.com/Sithuwa/SITHU-MD /root/Sithuwa/SITHU-MD
WORKDIR /root/Sithuwa/SITHU-MD/
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
 
 
