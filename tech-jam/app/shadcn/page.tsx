import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Page() {
  return (
    <div className="flex items-start justify-center pt-36">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <form className="flex items-center space-x-4">
        <Input
          type="search"
          placeholder="検索..."
          className="max-w-sm w-full"
        />
        <Button type="submit" className="max-w-sm">
          検索
        </Button>
      </form>
    </div>
  );
}
