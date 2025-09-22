import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const FloatingWhatsApp = () => {
  return (
    <Button
      variant="floating"
      size="floating"
      className="bottom-6 right-6 shadow-floating animate-pulse hover:animate-none"
      asChild
    >
      <a
        href="https://wa.me/message/ZF4H5D47JTAQN1"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageSquare size={24} />
      </a>
    </Button>
  );
};

export default FloatingWhatsApp;