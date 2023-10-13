import React from 'react'
import "./Display.css"
import p1 from "../../Images/blog1.png";
import Navbar from '../Navbar/Navbar';
function Display(props) {
  return (
    <div>
        <Navbar/>
      <div className='display'>
        <div><img src = {p1}/> </div>
        <h1>What sets authorized and unauthorized recyclers apart?</h1>
        <div>
        Authorized and unauthorized recyclers refer to organizations or individuals involved in the
recycling and disposal of waste materials, including electronic waste (e-waste). The key
difference between authorized and unauthorized recyclers lies in their legal status,
adherence to regulations, and the level of environmental responsibility they demonstrate.
Here are the distinctions:
        </div>
        <div>
        1. Legal Compliance: Authorized recyclers have the necessary permits, licenses, and
approvals from relevant government agencies to engage in recycling activities. They
operate in accordance with local, regional, and national laws and regulations.
        </div>
        <div>
        2. Environmental Standards: Authorized recyclers typically meet environmental and
safety standards. They are more likely to have facilities and processes in place that
minimize the environmental impact of recycling and disposal.
        </div>
        <div>
        3. Data Security: Many authorized recyclers have data security protocols in place. They can
securely wipe or destroy data on devices like hard drives and ensure that sensitive
information is not compromised.
        </div>
        <div>
        4. Accountability: Authorized recyclers are often subject to audits and inspections to
ensure they are following proper recycling and disposal practices. This accountability helps
maintain transparency and adherence to regulations.

        </div>
        <div>
        5. Recycling Certifications: Some authorized recyclers may hold certifications that
demonstrate their commitment to environmentally responsible practices, such as R2
(Responsible Recycling) or e-Stewards certification.
        </div>
        <div>
        6. Responsible E-Waste Management: They are more likely to participate in extended
producer responsibility (EPR) programs, collaborating with manufacturers to manage and
recycle electronic products responsibly.

        </div>

        <h2>Unauthorized Recyclers</h2>
        <div>
        1. Lack of Legal Authorization: Unauthorized recyclers operate without the necessary
permits or compliance with regulations. They may be engaged in illegal recycling activities.

        </div>

        <div>
        2. Environmental Concerns: Unauthorized recyclers may not have the infrastructure and
processes in place to manage e-waste in an environmentally responsible manner. This can
lead to pollution and environmental harm.

        </div>
<div>
3. Data Security Risks: Unauthorized recyclers may not prioritize data security, putting
sensitive information at risk when recycling devices with stored data.

</div>
        <div>
        4. No Accountability: Due to their unregulated status, unauthorized recyclers may not be
subject to audits or inspections. This can lead to a lack of transparency in their practices.

        </div>
        <div>
        5. Potential Health Hazards: Improper recycling practices by unauthorized recyclers can
expose workers and the surrounding community to hazardous materials, posing health
risks.
        </div>
        <div>
        6. Illegal E-Waste Exports: Some unauthorized recyclers engage in illegal e-waste
exports to countries with weaker regulations, causing environmental and health problems
in those regions.
        </div>

        <div>
        It's essential for individuals and businesses to work with authorized recyclers to ensure
that electronic waste is handled responsibly and legally. Authorized recyclers prioritize
environmentally sound practices, data security, and compliance with relevant regulations,
reducing the environmental and health risks associated with improper e-waste
management.
        </div>

        <div className='writer'>
         - Ayush Tomer
        </div>

      </div>
    </div>
  )
}

export default Display
