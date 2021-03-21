using Cars.Contracts;
using System;

namespace Cars
{
    public class StartUp
    {
        public static void Main(string[] args)
        {
            ICar seat = new Seat("Leon", "Grey");
            seat.Start();
            seat.Stop();
            ICar tesla = new Tesla("Model 3", "Red", 2);
            tesla.Start();
            tesla.Stop();

            Console.WriteLine(seat.ToString());
            Console.WriteLine(tesla.ToString());

        }
    }
}
