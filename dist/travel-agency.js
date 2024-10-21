"use strict";
class Customer {
    constructor(customerID, name, email, phone) {
        this.travelPreferences = [];
        this.bookings = [];
        this.customerID = customerID;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    browseDestinations() {
        // Logic to browse destinations
    }
    createCustomPackage() {
        // Logic to create a custom package
    }
    bookPackage(booking) {
        this.bookings.push(booking);
    }
    viewBookingDetails(bookingID) {
        return this.bookings.find(booking => booking.bookingID === bookingID);
    }
}
class TravelAgent {
    constructor(agentID, name) {
        this.agentID = agentID;
        this.name = name;
    }
    createPackage() {
        // Logic to create a travel package
    }
    processBooking(booking) {
        // Logic to process the booking
    }
    coordinateWithPartners() {
        // Logic to coordinate with partners
    }
    generateTravelDocuments() {
        // Logic to generate travel documents
    }
}
class Booking {
    constructor(bookingID, customerID, packageID, status, totalPrice) {
        this.bookingID = bookingID;
        this.customerID = customerID;
        this.packageID = packageID;
        this.status = status;
        this.totalPrice = totalPrice;
    }
    processPayment() {
        // Logic to process payment
    }
    generateInvoice() {
        // Logic to generate invoice
    }
}
class TravelPackage {
    constructor(packageID, name, duration, price) {
        this.destinations = [];
        this.activities = [];
        this.accommodations = [];
        this.packageID = packageID;
        this.name = name;
        this.duration = duration;
        this.price = price;
    }
    customizeItinerary() {
        // Logic to customize the itinerary
    }
    calculatePrice() {
        // Logic to calculate price based on activities and accommodations
        return this.price; // Placeholder return
    }
}
class Destination {
    constructor(destinationID, name, description, climate) {
        this.activities = [];
        this.accommodations = [];
        this.destinationID = destinationID;
        this.name = name;
        this.description = description;
        this.climate = climate;
    }
    getAvailableActivities() {
        return this.activities; // Return available activities
    }
    getAccommodations() {
        return this.accommodations; // Return available accommodations
    }
}
class Activity {
    constructor(activityID, name, description, duration, price) {
        this.activityID = activityID;
        this.name = name;
        this.description = description;
        this.duration = duration;
        this.price = price;
    }
}
class Accommodation {
    constructor(accommodationID, name, type, price) {
        this.accommodationID = accommodationID;
        this.name = name;
        this.type = type;
        this.price = price;
    }
    checkAvailability() {
        // Logic to check availability
        return true; // Placeholder return
    }
}
class TravelPreference {
    constructor(preferenceID, customerID, preferredDestinations, activityTypes, accommodationType, budget) {
        this.preferenceID = preferenceID;
        this.customerID = customerID;
        this.preferredDestinations = preferredDestinations;
        this.activityTypes = activityTypes;
        this.accommodationType = accommodationType;
        this.budget = budget;
    }
}
