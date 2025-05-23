import { Button } from "@/app/components/common/Button";
import { Input } from "@/app/components/common/Input";

export default function Newsletter() {
  return (
    <div className="mt-12 text-center">
      <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Subscribe to our newsletter for the latest articles and updates
      </p>
      <form className="max-w-md  flex-wrap flex gap-4">
        <Input
          type="email"
          placeholder="Enter your email"
          className="flex-1"
          variant="default"
          inputSize="md"
        />
        <Button type="submit" className="mx-auto" variant="primary" size="md">
          Subscribe
        </Button>
      </form>
    </div>
  );
}
