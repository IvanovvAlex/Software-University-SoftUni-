using EasterRaces.Models.Cars.Contracts;
using EasterRaces.Models.Drivers.Contracts;
using EasterRaces.Repositories.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EasterRaces.Repositories.Entities
{
    public class DriverRepository : IRepository<IDriver>
    {
        private List<IDriver> carsRepository;
        public DriverRepository()
        {
            this.carsRepository = new List<IDriver>();
        }
        public void Add(IDriver model)
        {
            this.carsRepository.Add(model);
        }

        public IReadOnlyCollection<IDriver> GetAll()
        {
            return this.carsRepository;
        }

        public IDriver GetByName(string name)
        {
            return carsRepository.FirstOrDefault(c => c.Name == name);
        }

        public bool Remove(IDriver model)
        {
            if (carsRepository.Contains(model))
            {
                carsRepository.Remove(model);
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
