import { z } from "zod"

export const jobFormData = [
  {
    id: 1,
    name: 'title',
    required: true,
    placeholder: 'Title',
    withOptions: false,
  },
  {
    id: 2,
    name: 'companyName',
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
    name: 'offerSallary',
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
    name: 'jobUrl',
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
  offerSallary: z.string().optional(),
  jobUrl: z.string().optional(),
  currentStatus: z.string().optional(),
  workMode: z.string().optional(),
  jobDescription: z.string().optional(),
  //this just verify if the value of the input is type of file
  resume: z.unknown().refine((value) => {
    if (value instanceof FileList || value === undefined) {
      return true
    } else {
      return false
    }
  }, {
    message: "The resume file must be in PDF format",
    //if the value is a file array, returned the first item
  }).transform(value => {
    if (value instanceof FileList) {
      return value[0]
    }else if (typeof value === 'string'){
      return value
    }
  })
})