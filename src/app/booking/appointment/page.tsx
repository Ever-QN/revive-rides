/**
 * v0 by Vercel.
 * @see https://v0.dev/t/TzGNqrwV4iY
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Component() {
  return (
    <div className="bg-[#bd1e59] p-8 text-white">
      <h1 className="text-3xl font-bold text-center mb-6">BOOK AN APPOINTMENT</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">SELECT SERVICE</h2>
          <form>
            <div className="space-y-2">
              <div className="flex items-center">
                <input className="w-4 h-4" id="service1" name="service" type="radio" />
                <label className="ml-2" htmlFor="service1">
                  Complimentary Repair Estimates
                </label>
              </div>
              <div className="flex items-center">
                <input className="w-4 h-4" id="service2" name="service" type="radio" />
                <label className="ml-2" htmlFor="service2">
                  Windshield & Glass Repair
                </label>
              </div>
              <div className="flex items-center">
                <input className="w-4 h-4" id="service3" name="service" type="radio" />
                <label className="ml-2" htmlFor="service3">
                  Paint Refinishing
                </label>
              </div>
              <div className="flex items-center">
                <input className="w-4 h-4" id="service4" name="service" type="radio" />
                <label className="ml-2" htmlFor="service4">
                  Interior/Exterior Details
                </label>
              </div>
              <div className="flex items-center">
                <input className="w-4 h-4" id="service5" name="service" type="radio" />
                <label className="ml-2" htmlFor="service5">
                  Dent Removal
                </label>
              </div>
              <div className="flex items-center">
                <input className="w-4 h-4" id="service6" name="service" type="radio" />
                <label className="ml-2" htmlFor="service6">
                  Others
                </label>
              </div>
            </div>
          </form>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">SELECT DATE</h2>
          <Calendar className="rounded-md border bg-white text-black" />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">SELECT A TIME</h2>
          <div className="grid grid-cols-2 gap-4">
            <Button className="bg-white text-[#bd1e59]">8:30 AM</Button>
            <Button className="bg-white text-[#bd1e59]">10:50 AM</Button>
            <Button className="bg-white text-[#bd1e59]">12:00 PM</Button>
            <Button className="bg-white text-[#bd1e59]">1:30 PM</Button>
            <Button className="bg-white text-[#bd1e59]">3:30 PM</Button>
            <Button className="bg-white text-[#bd1e59]">5:00 PM</Button>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">CONTACT INFORMATION</h2>
        <form className="space-y-4">
          <Input className="w-full bg-white text-black" placeholder="Name" type="text" />
          <Input className="w-full bg-white text-black" placeholder="Phone Number" type="text" />
          <Input className="w-full bg-white text-black" placeholder="Vehicle" type="text" />
          <Input className="w-full bg-white text-black" placeholder="Car Model" type="text" />
          <Input className="w-full bg-white text-black" placeholder="Preferred Date" type="text" />
          <Button className="w-full bg-white text-[#bd1e59]">SUBMIT</Button>
        </form>
      </div>
    </div>
  )
}

