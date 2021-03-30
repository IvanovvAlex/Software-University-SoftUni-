using _01Vehicles.Models;
using System;

namespace _01Vehicles
{
    public class StartUp
    {
        public static void Main(string[] args)
        {
            string[] carCreation = Console.ReadLine()
                .Split(" ", StringSplitOptions.RemoveEmptyEntries);

            double carStartLiters = double.Parse(carCreation[1]);
            double carStartCons = double.Parse(carCreation[2]);

            Vehicle car = new Car(carStartLiters, carStartCons);

            string[] truckCreation = Console.ReadLine()
                .Split(" ", StringSplitOptions.RemoveEmptyEntries);

            double truckStartLiters = double.Parse(truckCreation[1]);
            double truckStartCons = double.Parse(truckCreation[2]);

            Vehicle truck = new Truck(truckStartLiters, truckStartCons);

            int n = int.Parse(Console.ReadLine());

            for (int i = 0; i < n; i++)
            {
                string[] cmd = Console.ReadLine()
                    .Split(" ", StringSplitOptions.RemoveEmptyEntries);
                string command = cmd[0];
                string typeOfVehicle = cmd[1];
                double value = double.Parse(cmd[2]);
                switch (command)
                {
                    case "Drive":
                        switch (typeOfVehicle)
                        {
                            case "Car":
                                if (car.Drive(value))
                                {
                                    Console.WriteLine($"{typeOfVehicle} travelled {value} km");
                                }
                                else
                                {
                                    Console.WriteLine($"{typeOfVehicle} needs refueling");
                                }
                                break;
                            case "Truck":
                                if (truck.Drive(value))
                                {
                                    Console.WriteLine($"{typeOfVehicle} travelled {value} km");
                                }
                                else
                                {
                                    Console.WriteLine($"{typeOfVehicle} needs refueling");
                                }
                                break;
                        }
                        break;
                    case "Refuel":
                        switch (typeOfVehicle)
                        {
                            case "Car":
                                car.Refuel(value);
                                break;
                            case "Truck":
                                truck.Refuel(value);
                                break;
                        }
                        break;
                }
            }
            Console.WriteLine($"Car: {car.FuelQuantity:F2}");
            Console.WriteLine($"Truck: {truck.FuelQuantity:F2}");
        }
    }
}
                