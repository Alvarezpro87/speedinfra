// src/components/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-gray-800 text-center py-4">
        <div className="container mx-auto px-4">
          <p className="text-sm">
            © {new Date().getFullYear()} speedInfra Transforme sua infraestrutura
          </p>
        </div>
      </footer>
    );
  }
  