using API.Entities;

namespace API.Data
{
    public static class DbInitializer
    {
        public static void Initialize(StoreContext context)
        {
            if(context.Products.Any()) return;

            var products = new List<Product>
            {
                new Product
                {
                    Name = "Line, Basil & Mandarin Scented Candle",
                    Description =
                        "Elevate your space with the invigorating fusion of zesty lime, aromatic basil, and vibrant mandarin. Presented in a 30cl Matt White pot with a matching white wooden lid, this candle adds a touch of sophistication to your ambiance.",
                    Price = 1599,
                    PictureUrl = "/images/products/lbm-sc.png",
                    Type = "Candle",
                    QuantityInStock = 10
                },
                new Product
                {
                    Name = "Pumkin Spice Scented Candle",
                    Description = "Embrace the warmth of autumn with our Pumpkin Spice candle. Housed in a stylish 30cl Matt White pot and topped with a white wooden lid, it not only fills your space with a cozy aroma but also complements your decor beautifully.",
                    Price = 1599,
                    PictureUrl = "/images/products/ps-sc.png",
                    Type = "Candle",
                    QuantityInStock = 10
                },
                new Product
                {
                    Name = "Raspberry, Blackcurrent & Goji Berry Scented Candle",
                    Description =
                        "Immerse yourself in the delightful blend of Raspberry, Blackcurrant, and Goji Berry. This 30cl Matt White pot candle, paired with a white wooden lid, infuses your surroundings with a fruity fragrance while adding an elegant touch to your interior.",
                    Price = 1599,
                    PictureUrl = "/images/products/rbgb-sc.png",
                    Type = "Candle",
                    QuantityInStock = 10
                },
                new Product
                {
                    Name = "Sea Breeze Scented Wax Melts",
                    Description =
                        "Transform your space into a serene coastal retreat with our set of five Sea Breeze fragranced wax melts. Simply melt one for an instant refreshing sea-inspired ambiance, ideal for creating a tranquil atmosphere in your home or office.",
                    Price = 799,
                    PictureUrl = "/images/products/sb-wm.png",
                    Type = "Wax Melt",
                    QuantityInStock = 10
                },
            };

            foreach (var product in products)
            {
                context.Products.Add(product);

            }

            context.SaveChanges();
        }
    }
}