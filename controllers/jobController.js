import "express-async-errors";
import { nanoid } from "nanoid";
import Job from "../models/JobModel.js";

// let jobs = [
//   { id: nanoid(), company: "apple", position: "front-end developer" },
//   { id: nanoid(), company: "google", position: "back-end developer" },
// ];

export const createJob = async (req, res) => {
  const { company, position } = req.body;
  const job = await Job.create({ company, position });
  res.status(StatusCodes.CREATED).json({ job });
};

export const getAllJobs = async (req, res) => {
  const jobs = await Job.find({});
  res.status(200).json({ jobs });
};

// export const createJob = async (req, res) => {
//   const { company, position } = req.body;

//   if (!company || !position) {
//     return res.status(400).json({ msg: "please provide company and position" });
//   }
//   const id = nanoid(10);
//   const job = { id, company, position };
//   jobs.push(job);
//   res.status(200).json({ job });
// };

export const getJob = async (req, res) => {
  const { id } = req.params;
  const job = await Job.findById(id);
  if (!job) {
    // return res.status(404).json({ msg: `no job with id ${id}` });
    throw new Error("no job with that id");
  }
  res.status(StatusCodes.OK).json({ jobs });
};

export const updateJob = async (req, res) => {
  const { id } = req.params;
  const updateJob = await Job.findByIdAndUpdate(id, req.body, { new: true });
  if (!updateJob) {
    return res.status(404).json({ msg: `no job with id ${id}` });
  }
  res.status(200).json({ job: updatedJob });
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const removeJob = await Job.findByIdAndDelete(id);
  if (!removeJob) {
    return res.status(404).json({ msg: `no job with id ${id}` });
  }

  res.status(200).json({ job: removedJob });
};

// res.status(StatusCodes.OK).json({ jobs });
