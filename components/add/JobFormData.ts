import {z} from "zod"

export const jobFormData = [
  {
    id: 1,
    name: 'Title',
    required: true,
    placeholder: 'Title',
    withOptions: false,
  },
  {
    id: 2,
    name: 'Company',
    required: true,
    placeholder: 'Company name',
    withOptions: false,
  },
  {
    id: 4,
    name: 'workMode',
    withOptions: true,
    options: ["Remote", "In-person", "Hybrid", "Flexible"]
  },
  {
    id: 5,
    name: 'OfferSallary',
    required: false,
    placeholder: 'Offer sallary (optional)',
    withOptions: false,
  },
  {
    id: 6,
    name: 'currentStatus',
    withOptions: true,
    options: [
      "Applied",
      "Interviewing",
      "Offered",
      "Accepted",
      "Rejected",
      "Withdrawn",
    ]
  },
  {
    id: 7,
    name: 'JobUrl',
    required: false,
    placeholder: 'Job Url (optional)',
    withOptions: false,
  },

]

  export const createJobSchema = z.object({
  title: z.string().nonempty({
    message: 'The title is required',
  }),
  companyName: z.string().nonempty({
    message: 'The company name is required',
  }),
  offerSallary: z.string(),
  jobUrl: z.string(),
})