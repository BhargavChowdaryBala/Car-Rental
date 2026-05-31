// //This file is created to add the cars data to imgekit ,  developer can addd also manually though imagekit and mongodb database aboutht the car details




// import mongoose from "mongoose";
// import "dotenv/config";
// import Car from "./models/Car.js";
// import imagekit from "./configs/imageKit.js";
// import fs from "fs";
// import path from "path";

// const dummyCarData = [
//     {
//         brand: "BMW",
//         model: "X5",
//         imagePath: "../client/src/assets/car_image1.png",
//         year: 2006,
//         category: "SUV",
//         seating_capacity: 4,
//         fuel_type: "Hybrid",
//         transmission: "Semi-Automatic",
//         pricePerDay: 300,
//         location: "New York",
//         description: "The BMW X5 is a mid-size luxury SUV produced by BMW. The X5 made its debut in 1999 as the first SUV ever produced by BMW.",
//         isAvaliable: true
//     },
//     {
//         brand: "Toyota",
//         model: "Corolla",
//         imagePath: "../client/src/assets/car_image2.png",
//         year: 2021,
//         category: "Sedan",
//         seating_capacity: 4,
//         fuel_type: "Diesel",
//         transmission: "Manual",
//         pricePerDay: 130,
//         location: "Chicago",
//         description: "The Toyota Corolla is a mid-size luxury sedan produced by Toyota. The Corolla made its debut in 2008 as the first sedan ever produced by Toyota.",
//         isAvaliable: true
//     },
//     {
//         brand: "Jeep",
//         model: "Wrangler",
//         imagePath: "../client/src/assets/car_image3.png",
//         year: 2023,
//         category: "SUV",
//         seating_capacity: 4,
//         fuel_type: "Hybrid",
//         transmission: "Automatic",
//         pricePerDay: 200,
//         location: "Los Angeles",
//         description: "The Jeep Wrangler is a mid-size luxury SUV produced by Jeep. The Wrangler made its debut in 2003 as the first SUV ever produced by Jeep.",
//         isAvaliable: true
//     },
//     {
//         brand: "Ford",
//         model: "Neo 6",
//         imagePath: "../client/src/assets/car_image4.png",
//         year: 2022,
//         category: "Sedan",
//         seating_capacity: 2,
//         fuel_type: "Diesel",
//         transmission: "Semi-Automatic",
//         pricePerDay: 209,
//         location: "Houston",
//         description: "This is a mid-size luxury sedan produced by Toyota. The Corolla made its debut in 2008 as the first sedan ever produced by Toyota.",
//         isAvaliable: true
//     },
//     {
//         brand: "Honda",
//         model: "Civic",
//         imagePath: "../client/src/assets/car1.png",
//         year: 2022,
//         category: "Sedan",
//         seating_capacity: 4,
//         fuel_type: "Petrol",
//         transmission: "Automatic",
//         pricePerDay: 120,
//         location: "New York",
//         description: "The Honda Civic is a reliable, fuel-efficient sedan with a sporty design and spacious interior.",
//         isAvaliable: true
//     },
//     {
//         brand: "Mercedes-Benz",
//         model: "C-Class",
//         imagePath: "../client/src/assets/car2.png",
//         year: 2023,
//         category: "Sedan",
//         seating_capacity: 4,
//         fuel_type: "Petrol",
//         transmission: "Automatic",
//         pricePerDay: 280,
//         location: "Los Angeles",
//         description: "The Mercedes-Benz C-Class offers luxury features, high-tech infotainment, and a smooth, comfortable ride.",
//         isAvaliable: true
//     },
//     {
//         brand: "Ford",
//         model: "Explorer",
//         imagePath: "../client/src/assets/car3.png",
//         year: 2021,
//         category: "SUV",
//         seating_capacity: 7,
//         fuel_type: "Diesel",
//         transmission: "Automatic",
//         pricePerDay: 220,
//         location: "Houston",
//         description: "The Ford Explorer is a family-friendly mid-size SUV with three rows of seating and excellent cargo capacity.",
//         isAvaliable: true
//     },
//     {
//         brand: "Chevrolet",
//         model: "Express",
//         imagePath: "../client/src/assets/car4.png",
//         year: 2020,
//         category: "Van",
//         seating_capacity: 12,
//         fuel_type: "Gas",
//         transmission: "Automatic",
//         pricePerDay: 180,
//         location: "Chicago",
//         description: "The Chevrolet Express is a full-size passenger van designed for transporting large groups comfortably.",
//         isAvaliable: true
//     },
//     {
//         brand: "Audi",
//         model: "R8",
//         imagePath: "../client/src/assets/audi_r8.png",
//         year: 2023,
//         category: "Sedan", // Wait, catalog has option Sedan/SUV/Van. We'll use Sedan or let's use Sedan
//         seating_capacity: 2,
//         fuel_type: "Petrol",
//         transmission: "Automatic",
//         pricePerDay: 450,
//         location: "New York",
//         description: "A mid-engine, 2-seater sports car, which uses Audi's trademark quattro permanent all-wheel drive system.",
//         isAvaliable: true
//     },
//     {
//         brand: "Tesla",
//         model: "Cybertruck",
//         imagePath: "../client/src/assets/cybertruck.png",
//         year: 2024,
//         category: "SUV",
//         seating_capacity: 6,
//         fuel_type: "Electric",
//         transmission: "Automatic",
//         pricePerDay: 350,
//         location: "Los Angeles",
//         description: "Built for any planet, the Tesla Cybertruck is durable, rugged and ruggedly futuristic with an all-electric range.",
//         isAvaliable: true
//     }
// ];

// async function seed() {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/car-rental`);
//         console.log("Connected to database");

//         console.log("Seeding dummy cars...");
//         for (const dummy of dummyCarData) {
//             // Check if car already exists in the database
//             const exists = await Car.findOne({ brand: dummy.brand, model: dummy.model });
//             if (exists) {
//                 console.log(`Car already exists: ${dummy.brand} ${dummy.model}. Skipping.`);
//                 continue;
//             }

//             const resolvedPath = path.resolve(dummy.imagePath);
//             if (!fs.existsSync(resolvedPath)) {
//                 console.log(`Image not found at path: ${resolvedPath}`);
//                 continue;
//             }

//             const fileBuffer = fs.readFileSync(resolvedPath);
//             console.log(`Uploading ${dummy.brand} ${dummy.model} image to ImageKit...`);
            
//             const response = await imagekit.upload({
//                 file: fileBuffer,
//                 fileName: path.basename(resolvedPath),
//                 folder: '/cars'
//             });

//             const optimizedImageUrl = imagekit.url({
//                 path: response.filePath,
//                 transformation: [
//                     { width: '1280' },
//                     { quality: 'auto' },
//                     { format: 'webp' }
//                 ]
//             });

//             const car = {
//                 brand: dummy.brand,
//                 model: dummy.model,
//                 image: optimizedImageUrl,
//                 year: dummy.year,
//                 category: dummy.category,
//                 seating_capacity: dummy.seating_capacity,
//                 fuel_type: dummy.fuel_type,
//                 transmission: dummy.transmission,
//                 pricePerDay: dummy.pricePerDay,
//                 location: dummy.location,
//                 description: dummy.description,
//                 isAvaliable: dummy.isAvaliable
//             };

//             await Car.create(car);
//             console.log(`Created car: ${dummy.brand} ${dummy.model}`);
//         }
//         console.log("Seeding completed successfully!");
//     } catch (error) {
//         console.error("Error during seeding:", error);
//     } finally {
//         await mongoose.connection.close();
//     }
// }

// seed();
