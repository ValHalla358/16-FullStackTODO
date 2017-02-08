using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using ToDoList.Models;

namespace ToDoList.API.Data
{
    public class ToDoListDataContext : DbContext
    {

        public ToDoListDataContext (): base("ToDoList")
        {
        
        }

        public IDbSet<ToDoListEntry>ToDoListEntries { get; set; }
        
    }
}