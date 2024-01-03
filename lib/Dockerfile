FROM quay.io/maherzubair/sigma-md:beta
RUN git clone https://github.com/Maher-Zubair/SIGMA-MD /root/Maher-Zubair/SIGMA-MD
WORKDIR /root/Maher-Zubair/SIGMA-MD/
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
 
 