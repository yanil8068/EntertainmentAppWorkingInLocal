# Entertainment app

Description: An Entertainment app leveraging the TMDB API to provide comprehensive details on movies and TV series. Built using the MERN stack, it offers users an intuitive platform to explore filmographies, read reviews, and discover trending content. Dive into a rich database to satisfy all your cinematic curiosities.

## Deployment

Frontend link : https://entertainment-app-working-in-local-client.vercel.app/

Backend link : https://entertainment-app-working-in-local.vercel.app/

## Tech Stack

React.js, Tailwind CSS , Npm ,HTML ,CSS ,Vite ,React Query ,Javascript ,Context API ,Node js, Express js,cookie-parser ,bcrypt ,MongoDB ,Mongoose dotenv ,cors ,jsonwebtoken

## Features

- **Authentication**: Register, login, and manage user sessions.
- **Media Exploration**: Browse trending movies and TV series.
- **Bookmarking**: Save favorite media items.
- **Search**: Search for specific movies or TV series.
- **Responsive Design**: Optimized for various screen sizes.

## The Database Schema

The database schema consists of two main entities: User and Bookmark. These entities are linked to maintain the relationships and data integrity required for a functional bookmarking system.

#User Entity:

#Fields:
name: String (Required) - The user's name.

email: String (Required, Unique) - The user's email address, unique across all users.

password: String (Required) - The user's password, which should be stored securely (e.g., hashed).

createdAt: Date (Default: Date.now) - Timestamp of when the user account was created.

#Bookmark Entity:
#Fields:
user: mongoose.Schema.Types.ObjectId (Reference to User, Required) - A reference to the user who created the bookmark.

id: String(Required) - A unique identifier for the media item.

title: String (Required) - The title of the media item.

image: String (Required) - URL or path to the media's image.

isAdult: Boolean (Required) - Indicates if the media is suitable for adults.

mediaType: String (Enum: ['movie', 'tv'], Required) - The type of media, either 'movie' or 'tv'.

releaseDate: Date (Required) - The release date of the media give the readme code for this
