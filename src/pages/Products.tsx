
import { ArrowUpRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

interface Product {
  id: string;
  name: string;
  subheading: string;
  content: string;
  status: string;
}

// Updated product data with text corrections
const products: Product[] = [{
  id: "1",
  name: "Try The Fit",
  subheading: "AI Virtual Try On for E-Commerce",
  content: "We're building an intuitive virtual try on solution that is easy to integrate with your e-commerce site. It can help you increase your site engagement time, reduce bounce rate and potentially reduce look based returns",
  status: "Coming Soon"
}, {
  id: "2",
  name: "Data Magic",
  subheading: "An intuitive dashboard for your e-commerce store",
  content: "Running operations for an e-commerce store can be hard with age old ERP systems. We're building a simplified dashboard that gives you info on orders, returns, cancellations, inventory and reconciliation in the simplest way possible.",
  status: "Coming Soon"
}, {
  id: "3",
  name: "Maestro",
  subheading: "A platform for just in time manufacturing in fashion",
  content: "We're building a platform that allows brands to leverage a network of diverse selected stakeholders to create and execute a collection from design to delivery with certain time, cost, predictability and reliability",
  status: "Coming Soon"
}];

const Products = () => {
  return <div className="py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-primary text-center">
            Our Products
          </h1>
          <p className="text-lg text-gray-600 mb-16 text-center max-w-3xl mx-auto">Things we have built</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {products.map((product) => (
              <Card key={product.id} className="h-full flex flex-col">
                <CardHeader className="p-4">
                  <CardTitle className="text-2xl font-display font-bold text-primary">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-lg font-light text-gray-600">
                    {product.subheading}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow p-4 pt-0">
                  <p className="text-gray-700 leading-relaxed">
                    {product.content}
                  </p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <div className="flex items-center">
                    <p className="text-primary font-medium italic underline flex items-center">
                      {product.status}
                      <ArrowUpRight className="ml-1 inline-block" size={16} />
                    </p>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-24 text-center">
            <h3 className="text-2xl font-display font-bold mb-4 text-primary">Liked what we've built?</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Hit us up if you want to try out any of our products</p>
            <a href="mailto:pradyun@alaiy.com" className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>;
};

export default Products;
