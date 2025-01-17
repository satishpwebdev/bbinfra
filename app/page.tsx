"use client";

import Image from "next/image";
import Link from "next/link";
import {
  JSXElementConstructor,
  Key,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  ReactPortal,
  useState,
} from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Building2,
  Briefcase,
  Users,
  Trophy,
  ArrowRight,
  Star,
} from "lucide-react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useCarouselAuto } from "@/hooks/use-carousel-auto";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const heroSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
    title: "Building Tomorrow Today",
    description:
      "Leading the way in infrastructure development with innovation, expertise, and sustainability.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop",
    title: "Excellence in Construction",
    description:
      "Delivering world-class infrastructure projects with precision and innovation.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1455735459330-969b65c65b1c?q=80&w=2070&auto=format&fit=crop",
    title: "Sustainable Development",
    description:
      "Creating infrastructure that harmonizes with the environment and serves communities.",
  },
];

const services = [
  {
    title: "Construction Management",
    description:
      "Expert management of construction projects from inception to completion.",
    icon: Building2,
  },
  {
    title: "Infrastructure Development",
    description:
      "Comprehensive infrastructure solutions for sustainable development.",
    icon: Briefcase,
  },
  {
    title: "Project Consulting",
    description:
      "Professional consulting services for construction and infrastructure projects.",
    icon: Users,
  },
  {
    title: "Quality Assurance",
    description: "Rigorous quality control and assurance for all projects.",
    icon: Trophy,
  },
];

const testimonials = [
  {
    name: "John Smith",
    role: "CEO, Tech Solutions Inc.",
    content:
      "Bablu Infracon delivered our office complex ahead of schedule and exceeded our expectations in quality.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Sarah Johnson",
    role: "Director, Urban Development",
    content:
      "Their attention to detail and commitment to sustainability made them the perfect partner for our eco-friendly project.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Michael Chen",
    role: "Property Developer",
    content:
      "Working with Bablu Infracon was a seamless experience. Their expertise in construction management is unmatched.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
  },

  {
    name: "John Smith",
    role: "CEO, Tech Solutions Inc.",
    content:
      "Bablu Infracon delivered our office complex ahead of schedule and exceeded our expectations in quality.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
  },

  
];

export default function Home() {
  const [api, setApi] = useState<CarouselApi>();
  useCarouselAuto(api);

  return (
    <>
      {/* Hero Section with Carousel */}
      <section className="relative h-[100vh] w-full overflow-hidden">
        <Carousel
          className="w-full h-full"
          opts={{ loop: true }}
          setApi={setApi}
        >
          <CarouselContent>
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index} className="relative h-[100vh]">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-6 max-w-4xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 transition-all">
                      {slide.title}
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                      {slide.description}
                    </p>
                    <Button
                      size="lg"
                      asChild
                      className="hover:scale-105 transition-transform"
                    >
                      <Link href="/contact">Start Your Project</Link>
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden sm:block">
            <CarouselPrevious className="left-4 bg-white/20 hover:bg-white/40 border-none text-white" />
            <CarouselNext className="right-4 bg-white/20 hover:bg-white/40 border-none text-white" />
          </div>
        </Carousel>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                About Bablu Infracon
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                With over two decades of experience, Bablu Infracon has
                established itself as a leader in the construction and
                infrastructure development industry. Our commitment to
                excellence and innovation drives us to deliver exceptional
                results for our clients.
              </p>
              <Button variant="outline" asChild className="w-full sm:w-auto">
                <Link href="/about">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[300px] sm:h-[400px] order-1 md:order-2">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop"
                alt="Team meeting"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="py-24 px ">
        <div className="mx-auto md:px-24 px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Hear from our satisfied clients about their experience working
              with Bablu Infracon.
            </p>
          </div>
          <Carousel className="md:w-full" >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={testimonial.name}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="h-full">
                    <CardHeader className="text-center">
                      <div className="flex justify-center mb-4">
                        <div className="relative w-20 h-20">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover rounded-full"
                            priority={index === 0}
                          />
                        </div>
                      </div>
                      <div className="flex justify-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                      <CardTitle className="text-lg">
                        {testimonial.name}
                      </CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-center text-gray-600 dark:text-gray-300">
                        "{testimonial.content}"
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We offer comprehensive construction and infrastructure development
              services tailored to meet your specific needs.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service) => (
              <Card
                key={service.title}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <service.icon className="h-10 sm:h-12 w-10 sm:w-12 text-primary mb-4" />
                  <CardTitle className="text-lg sm:text-xl">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gray-50 dark:bg-gray-900 py-16 sm:py-24 px-4 sm:px-6 bg-primary text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how we can help bring your vision to
            life.
          </p>
          <Button asChild className="w-full sm:w-auto bg-white text-black">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
