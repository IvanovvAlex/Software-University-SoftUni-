using _07MilitaryElite.Contracts;

namespace _07MilitaryElite.Models
{
    public class Repair : IRepair
    {
        private string partName;
        private int hoursWorked;
        public Repair(string partName, int hoursWorked)
        {
            PartName = partName;
            HoursWorked = hoursWorked;
        }

        public string PartName
        {
            get { return partName; }
            private set { partName = value; }
        }

        public int HoursWorked
        {
            get { return hoursWorked; }
            private set { hoursWorked = value; }
        }

    }
}