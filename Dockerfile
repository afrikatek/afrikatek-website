# Step 1 : We build the angular app using the production config
FROM node:latest as build
# Step 2 : Set the working directory
WORKDIR /app
# Step 3 : Copy the package.json and package-lock.json files
COPY package*.json ./
# Step 4 : Run clean install of the dependencies
RUN npm ci
# Step 5 : Install Angular CLI globally
RUN npm install -g @angular/cli
# Step 6 : Copy all files
COPY . .
# Step 7 : Build the application
RUN npm run build --configuration=production

# Step 8 : Install nginx image
FROM nginx:latest

# Step 9 : Copy the build output to replace the default nginx contents
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Step 10 : Copy the build output to replace the default nginx contents.
COPY --from=build /app/dist/afrikatek-website/browser /usr/share/nginx/html

# Step 11 : Expose port 80
EXPOSE 80

# Build: docker build -t afrikatek-website .
# Run : docker run -d -p 8080:80 afrikatek-website
