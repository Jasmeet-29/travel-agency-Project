class Customer {
    customerID: string;
    name: string;
    email: string;
    phone: string;
    travelPreferences: TravelPreference[] = [];
    bookings: Booking[] = [];

    constructor(customerID: string, name: string, email: string, phone: string) {
        this.customerID = customerID;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    browseDestinations(): void {
        // Logic to browse destinations
    }

    createCustomPackage(): void {
        // Logic to create a custom package
    }

    bookPackage(booking: Booking): void {
        this.bookings.push(booking);
    }

    viewBookingDetails(bookingID: string): Booking | undefined {
        return this.bookings.find(booking => booking.bookingID === bookingID);
    }
}

class TravelAgent {
    agentID: string;
    name: string;

    constructor(agentID: string, name: string) {
        this.agentID = agentID;
        this.name = name;
    }

    createPackage(): void {
        // Logic to create a travel package
    }

    processBooking(booking: Booking): void {
        // Logic to process the booking
    }

    coordinateWithPartners(): void {
        // Logic to coordinate with partners
    }

    generateTravelDocuments(): void {
        // Logic to generate travel documents
    }
}

class Booking {
    bookingID: string;
    customerID: string;
    packageID: string;
    status: string;
    totalPrice: number;

    constructor(bookingID: string, customerID: string, packageID: string, status: string, totalPrice: number) {
        this.bookingID = bookingID;
        this.customerID = customerID;
        this.packageID = packageID;
        this.status = status;
        this.totalPrice = totalPrice;
    }

    processPayment(): void {
        // Logic to process payment
    }

    generateInvoice(): void {
        // Logic to generate invoice
    }
}

class TravelPackage {
    packageID: string;
    name: string;
    duration: number;
    price: number;
    destinations: Destination[] = [];
    activities: Activity[] = [];
    accommodations: Accommodation[] = [];

    constructor(packageID: string, name: string, duration: number, price: number) {
        this.packageID = packageID;
        this.name = name;
        this.duration = duration;
        this.price = price;
    }

    customizeItinerary(): void {
        // Logic to customize the itinerary
    }

    calculatePrice(): number {
        // Logic to calculate price based on activities and accommodations
        return this.price; // Placeholder return
    }
}

class Destination {
    destinationID: string;
    name: string;
    description: string;
    climate: string;
    activities: Activity[] = [];
    accommodations: Accommodation[] = [];

    constructor(destinationID: string, name: string, description: string, climate: string) {
        this.destinationID = destinationID;
        this.name = name;
        this.description = description;
        this.climate = climate;
    }

    getAvailableActivities(): Activity[] {
        return this.activities; // Return available activities
    }

    getAccommodations(): Accommodation[] {
        return this.accommodations; // Return available accommodations
    }
}

class Activity {
    activityID: string;
    name: string;
    description: string;
    duration: number;
    price: number;

    constructor(activityID: string, name: string, description: string, duration: number, price: number) {
        this.activityID = activityID;
        this.name = name;
        this.description = description;
        this.duration = duration;
        this.price = price;
    }
}

class Accommodation {
    accommodationID: string;
    name: string;
    type: string;
    price: number;

    constructor(accommodationID: string, name: string, type: string, price: number) {
        this.accommodationID = accommodationID;
        this.name = name;
        this.type = type;
        this.price = price;
    }

    checkAvailability(): boolean {
        // Logic to check availability
        return true; // Placeholder return
    }
}

class TravelPreference {
    preferenceID: string;
    customerID: string;
    preferredDestinations: string[];
    activityTypes: string[];
    accommodationType: string;
    budget: number;

    constructor(preferenceID: string, customerID: string, preferredDestinations: string[], activityTypes: string[], accommodationType: string, budget: number) {
        this.preferenceID = preferenceID;
        this.customerID = customerID;
        this.preferredDestinations = preferredDestinations;
        this.activityTypes = activityTypes;
        this.accommodationType = accommodationType;
        this.budget = budget;
    }
}