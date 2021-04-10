namespace Aquariums.Tests
{
    using NUnit.Framework;
    using System;
    using System.Collections.Generic;

    public class AquariumsTests
    {
        private string name;
        private int capacity;
        private List<Fish> fishList;
        private Fish fish;
        private Aquarium aquarium;



        [SetUp]
        public void Setup()
        {
            fish = new Fish("ribka");
            aquarium = new Aquarium("akvariumche", 2);
        }

        [Test]
        public void Test_Constructor()
        {
            Assert.That(aquarium.Name, Is.EqualTo("akvariumche"));
            Assert.That(aquarium.Capacity, Is.EqualTo(2));
            Assert.That(aquarium.Count, Is.EqualTo(0));
        }
        [Test]
        public void Test_Capacity_True()
        {
            aquarium.Add(fish);
            Assert.That(aquarium.Capacity, Is.EqualTo(2));
        }
        [Test]
        public void Test_Capacity_error()
        {
            

            var ex = Assert.Throws<ArgumentException>(() =>
            {
                var testAquarium = new Aquarium("a", -2);
            });

            Assert.AreEqual("Invalid aquarium capacity!", ex.Message);
        }
        [Test]
        public void Test_Name_True()
        {
            aquarium.Add(fish);
            Assert.That(aquarium.Name, Is.EqualTo("akvariumche"));
        }
        [Test]
        public void Test_Name_error()
        {


            var ex = Assert.Throws<ArgumentNullException>(() =>
            {
                var testAquarium = new Aquarium(null, 1);
            });

            Assert.AreEqual("Invalid aquarium name! (Parameter 'value')", ex.Message);
        }
        [Test]
        public void Test_Metod1_addTrue()
        {
            aquarium.Add(fish);
            Assert.That(aquarium.Count, Is.EqualTo(1));
        }
        [Test]
        public void Test_Metod1_adderror()
        {
            var testAquarium = new Aquarium("a", 0);
            
            var ex = Assert.Throws<InvalidOperationException>(() =>
            {
                testAquarium.Add(fish);
            });

            Assert.AreEqual("Aquarium is full!", ex.Message);
        }
        [Test]
        public void Test_Metod2_removeTrue()
        {
            aquarium.Add(fish);
            aquarium.RemoveFish(fish.Name);
            Assert.That(aquarium.Count, Is.EqualTo(0));
        }
        [Test]
        public void Test_Metod2_removeError()
        {
            var testAquarium = new Aquarium("a", 0);

            var ex = Assert.Throws<InvalidOperationException>(() =>
            {
                testAquarium.RemoveFish("pesho");
            });

            Assert.AreEqual($"Fish with the name pesho doesn't exist!", ex.Message);
        }
        [Test]
        public void Test_Metod3_sellTrue()
        {
            aquarium.Add(fish);
            Fish reqFish = aquarium.SellFish(fish.Name);
            Assert.That(reqFish, Is.EqualTo(fish));
        }
        [Test]
        public void Test_Metod3_sellError()
        {
            aquarium.Add(fish);
                       
            var ex = Assert.Throws<InvalidOperationException>(() =>
            {
                Fish reqFish = aquarium.SellFish("wrongName");
            });

            Assert.AreEqual($"Fish with the name wrongName doesn't exist!", ex.Message);
        }
        [Test]
        public void Test_Metod4_report()
        {
            aquarium.Add(fish);
            aquarium.Add(new Fish("pesho"));
            string mess = aquarium.Report();
            Assert.That(mess, Is.EqualTo($"Fish available at akvariumche: ribka, pesho"));
        }        
    }
}
