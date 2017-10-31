db.links.aggregate([
    {
        $lookup:
            {
                from: "inventory",
                localField: "item",
                foreignField: "sku",
                as: "inventory_docs"
            }
    }
]);