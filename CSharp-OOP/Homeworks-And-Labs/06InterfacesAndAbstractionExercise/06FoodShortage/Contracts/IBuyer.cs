namespace _06FoodShortage.Contracts
{
    public interface IBuyer
    {
        void BuyFood();
         int Food { get; }
         int Modifier { get; }
    }
}