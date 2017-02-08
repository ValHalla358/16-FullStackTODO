using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ToDoList.Models
{
    public class ToDoListEntry
    {
        //primary Key
        public int ToDoListEntryId { get; set; }

        // addition columns
        public string Task { get; set; }
        public string Priority { get; set; }
        public DateTime CreateDate { get; set; }
    }
}