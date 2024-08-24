import React from "react";
import { Module } from "./module";
import Image from "next/image";

const Content = () => {
  return (
    <div className="mt-[-40px] scroll">
      <div id="project" className="">
        <Module
          heading="What is a Project ?"
          content="In Acedboard, a project is the second level in the organizational unit. A project is a group of tasks and or people working together for a specific goal, outcome within a set time. Each person has their own role or collaborates
on shared tasks to achieve success. Projects can be of any size or complexity, from building a small tree-house to large-scale construction initiatives spanning years.
Once you have created your first workspace you can find projects in the left side of your screen, click the three dots beside the project icon to view more options."
        />
        <Image
          src="/assets/content/project.png"
          layout="responsive"
          width={1200}
          height={800}
          className="w-[full]"
        />
      </div>
      {/* Create New Project */}
      <div id="newproject" className="">
        <Module
          heading="Creating a New Project"
          content="Once you have selected the three dots, select the new project option to get started."
        />
        <Image
          src="/assets/content/project.png"
          layout="responsive"
          width={1200}
          height={800}
          className="w-[full]"
        />
      </div>
      {/* Naming Project */}
      <div id="nameproject" className="">
        <Module
          heading="Naming your projects and Select View Modes"
          content="After choosing the 'New Project' option, proceed to define the project name. Optionally, you can provide additional details by inputting a description for more context."
        />
        <Image
          src="/assets/content/nameproject.png"
          layout="responsive"
          width={1200}
          height={800}
          className="w-[full]"
        />
        <Module
          heading=""
          content="On inputting the project name and description, you can go on to select your desired view from the array of view
modes available to see different details of your project. You need to select at least one view to proceed."
        />
        <Module
          heading=""
          content="After creating a project, you have the flexibility to build a well-organized structure by adding tasks, folders, groups, subgroups, to-do lists, and other smaller units to enhance the overall organization and structure of your project."
        />
        <Image
          src="/assets/content/nameproject.png"
          layout="responsive"
          width={1200}
          height={800}
          className="w-[full]"
        />
      </div>

      {/* single Project Operations */}

      <div id="simpleproject" className="">
        <Module
          heading="Simple project Operations"
          content="You have the flexibility to execute basic actions such as renaming your project, copying the project link for easy sharing with team members or relevant parties who may not be directly involved in the project."
        />
        <Image
          src="/assets/content/project.png"
          layout="responsive"
          width={1200}
          height={800}
          className="w-[full]"
        />
      </div>

      {/* Add Members */}

      <div id="addmemberstoproject" className="">
        <Module
          heading="Adding members to a project"
          content="To add members to your projects, click on the three dots next to the project name and select 'Add People.' Choose individuals from the list within your workspace to include them in the project."
        />
        <div className="flex justify-between gap-[20px]">
          <div className="flex-1 max-w-[calc(100% / 2 - 20px)]">
            <Image
              src="/assets/content/archiveproduct.png"
              layout="responsive"
              width={1200}
              height={800}
              className="w-[full]"
            />
          </div>
          <div className="flex-1 max-w-[calc(100% / 2 - 20px)]">
            <Image
              src="/assets/content/archiveproduct.png"
              layout="responsive"
              width={1200}
              height={800}
              className="w-[full]"
            />
          </div>
        </div>
      </div>

      {/* Archive Project */}

      <div id="archiveproduct" className="">
        <Module
          heading="Archiving a project."
          content="After successfully finishing your project, you have the option to archive closed projects for record-keeping or store them securely in the cloud for future reference. This helps in organizing your workspace by prioritizing projects that require immediate attention while keeping a neat and accessible record of completed endeavors."
        />
        <Module
          heading=""
          content="To archive a project, select the 3 dots beside the project name and then select the archive icon."
        />
        <div className="flex justify-between gap-[20px]">
          <div className="flex-1 max-w-[calc(100% / 2 - 20px)]">
            <Image
              src="/assets/content/archiveproduct.png"
              layout="responsive"
              width={1200}
              height={800}
              className="w-[full]"
            />
          </div>
          <div className="flex-1 max-w-[calc(100% / 2 - 20px)]">
            <Image
              src="/assets/content/archiveproduct.png"
              layout="responsive"
              width={1200}
              height={800}
              className="w-[full]"
            />
          </div>
        </div>
      </div>

      {/* View Archive */}

      <div id="viewarchive" className="">
        <Module
          heading="Viewing Archived Projects"
          content="To access archived projects, simply go to the left sidebar where your projects are listed. Click on the three
dots, and then choose 'Show Archived' to view all archived projects. You can repeat this process to toggle
between showing and hiding archived projects."
        />
        <div className="flex justify-between gap-[20px]">
          <div className="flex-1 max-w-[calc(100% / 3 - 20px)]">
            <Image
              src="/assets/content/viewarchive.png"
              layout="responsive"
              width={1200}
              height={800}
              className="w-[full]"
            />
          </div>
          <div className="flex-1 max-w-[calc(100% / 3 - 20px)]">
            <Image
              src="/assets/content/viewarchive.png"
              layout="responsive"
              width={1200}
              height={800}
              className="w-[full]"
            />
          </div>
          <div className="flex-1 max-w-[calc(100% / 3 - 20px)]">
            <Image
              src="/assets/content/viewarchive.png"
              layout="responsive"
              width={1200}
              height={800}
              className="w-[full]"
            />
          </div>
        </div>
      </div>

      {/* Auxilliaries */}

      <div id="" className="">
        <Module
          heading=""
          content="For your projects, you can also view
Tasks: This shows further subdivision of each aspect of the project broken down into smaller segments."
        />
        <Image
          src="/assets/content/auxx.png"
          layout="responsive"
          width={1200}
          height={800}
          className="w-[full]"
        />
      </div>

      <div id="" className="">
        <Module
          heading=""
          content="Files: This view consolidates all files related to your current project, contributed by various users, providing a centralized location for easy access to all project-related files."
        />
        <Image
          src="/assets/content/auxx.png"
          layout="responsive"
          width={1200}
          height={800}
          className="w-[full]"
        />
      </div>

      <div id="" className="">
        <Module
          heading=""
          content="Dashboard: The Dashboard provides a visual representation of your task statistics, offering insights based on various parameters such as statuses, priorities, tags, and assignees.."
        />
        <Image
          src="/assets/content/auxx.png"
          layout="responsive"
          width={1200}
          height={800}
          className="w-[full]"
        />
      </div>

      <div id="" className="">
        <Module
          heading=""
          content="Automation : In Acedboard, Automations are predefined instructions or actions designed to execute automatically when specific conditions are met, streamlining your workflow and enhancing efficiency. You can easily manage all your automations within your projects or create new ones to tailor your processes."
        />
        <Image
          src="/assets/content/auxx.png"
          layout="responsive"
          width={1200}
          height={800}
          className="w-[full]"
        />
      </div>

      <div id="" className="">
        <Module
          heading=""
          content="Notifications: You can view all your notifications and how other users interact with you in this portion of your project."
        />
        <Image
          src="/assets/content/auxx.png"
          layout="responsive"
          width={1200}
          height={800}
          className="w-[full]"
        />
      </div>

      <div id="" className="">
        <Module
          heading=""
          content="Applications & Widgets: Explore various applications and additional widgets here, with the current inclusion being the timesheet tool. Expect the addition of more applications over time."
        />
        <Image
          src="/assets/content/auxx.png"
          layout="responsive"
          width={1200}
          height={800}
          className="w-[full]"
        />
      </div>

      <div id="" className="">
        <Module
          heading=""
          content="Task Timer: This feature allows you to be able to allocate time spent on task in your project."
        />
        <Image
          src="/assets/content/auxx.png"
          layout="responsive"
          width={1200}
          height={800}
          className="w-[full]"
        />
      </div>

      {/* Leave Project */}

      <div id="leaveproject" className="">
        <Module
          heading="Leaving & Deleting a Project"
          content="Leaving a project: After fulfilling your role in a project, you have the option to leave. Keep in mind that once you leave, access to project files and the ability to make changes will no longer be available, unless you are re-added by an Admin or the project owner."
        />
        <Image
          src="/assets/content/leave.png"
          layout="responsive"
          width={1200}
          height={800}
          className="w-[full]"
        />
      </div>

      {/* Delete Project */}

      <div id="deleteproject" className="">
        <Module
          heading="Deleting a Project:"
          content="After successfully completing a project or determining its lack of viability, you have the option to delete it, relocating it to the trash bin. Exercise caution, as once a project is permanently deleted from the trash bin, restoration is not possible."
        />
        <Image
          src="/assets/content/leave.png"
          layout="responsive"
          width={1200}
          height={800}
          className="w-[full]"
        />
      </div>

    </div>
  );
};

export default Content;
