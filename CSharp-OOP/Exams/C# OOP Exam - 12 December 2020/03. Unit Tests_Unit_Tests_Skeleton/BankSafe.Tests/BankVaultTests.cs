using NUnit.Framework;
using System;

namespace BankSafe.Tests
{
    public class BankVaultTests
    {
        private BankVault vault;
        private Item item;
        [SetUp]
        public void Setup()
        {
            vault = new BankVault();
            item = new Item("me", "1");
        }

        [Test]
        public void Test1()
        {
            Exception ex = Assert.Throws<ArgumentException>(() =>
            {
                vault.AddItem("go nqmq", item);
            });

            Assert.AreEqual(ex.Message, "Cell doesn't exists!");
        }
        [Test]
        public void Test2()
        {
            Exception ex = Assert.Throws<ArgumentException>(() =>
            {
                vault.AddItem("A2", item);
                vault.AddItem("A2", new Item("pesho", "3"));
            });

            Assert.AreEqual(ex.Message, "Cell is already taken!");
        }
        [Test]
        public void Test3()
        {
            Exception ex = Assert.Throws<InvalidOperationException>(() =>
            {
                vault.AddItem("A2", item);
                vault.AddItem("B3", item);
            });

            Assert.AreEqual(ex.Message, "Item is already in cell!");
        }
        [Test]
        public void Test4()
        {
            string result = vault.AddItem("A2", item);

            Assert.AreEqual(result, $"Item:1 saved successfully!");
        }
        [Test]
        public void Test5()
        {
            Exception ex = Assert.Throws<ArgumentException>(() =>
            {
                vault.RemoveItem("f1", item);
            });

            Assert.AreEqual(ex.Message, "Cell doesn't exists!");
        }
        [Test]
        public void Test6()
        {
            Exception ex = Assert.Throws<ArgumentException>(() =>
            {
                vault.RemoveItem("A1", item);
            });

            Assert.AreEqual(ex.Message, "Item in that cell doesn't exists!");
        }
        [Test]
        public void Test7()
        {
            vault.AddItem("A2", item);
            string result = vault.RemoveItem("A2", item);

            Assert.AreEqual(result, $"Remove item:1 successfully!");
        }
    }
}