# API Documentation

This document provides information about the endpoints and functionalities of the API.

## Login
- **Endpoint:** `POST /api/login`
- **Description:** Authenticate the user and generate a JSON Web Token (JWT).
- **Request Body:**
  - `firstName` (String): User's first name.
  - `lastName` (String): User's last name.
- **Response:**
  - `token` (String): JWT token for authentication.

## Get Vehicle Categories
- **Endpoint:** `GET /api/vehiclescategory`
- **Description:** Get the list of vehicle categories.

## Get Vehicle Subcategories
- **Endpoint:** `GET /api/getsubcategoryofvehicles/:numberofwheels`
- **Description:** Get vehicle subcategories based on the number of wheels.
- **Parameters:**
  - `numberofwheels` (Number): Number of wheels of the vehicles.

## Get Vehicle List
- **Endpoint:** `GET /api/getvehiclelist/:id`
- **Description:** Get the list of vehicles for a specific subcategory.
- **Parameters:**
  - `id` (String): Subcategory ID.

## Book Vehicle
- **Endpoint:** `POST /api/bookVehicle`
- **Description:** Book a vehicle with a specified start and end date.
- **Request Body:**
  - `vehicleId` (String): Vehicle ID to book.
  - `startDate` (Date): Start date of the booking.
  - `endDate` (Date): End date of the booking.




