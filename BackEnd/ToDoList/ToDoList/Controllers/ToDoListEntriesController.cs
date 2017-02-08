using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using ToDoList.API.Data;
using ToDoList.Models;

namespace ToDoList.Controllers
{
    public class ToDoListEntriesController : ApiController
    {
        private ToDoListDataContext db = new ToDoListDataContext();

        // GET: api/ToDoListEntries
        public IQueryable<ToDoListEntry> GetToDoListEntries()
        {
            return db.ToDoListEntries;
        }

        // GET: api/ToDoListEntries/5
        [ResponseType(typeof(ToDoListEntry))]
        public IHttpActionResult GetToDoListEntry(int id)
        {
            ToDoListEntry toDoListEntry = db.ToDoListEntries.Find(id);
            if (toDoListEntry == null)
            {
                return NotFound();
            }

            return Ok(toDoListEntry);
        }

        // PUT: api/ToDoListEntries/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutToDoListEntry(int id, ToDoListEntry toDoListEntry)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != toDoListEntry.ToDoListEntryId)
            {
                return BadRequest();
            }

            db.Entry(toDoListEntry).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ToDoListEntryExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/ToDoListEntries
        [ResponseType(typeof(ToDoListEntry))]
        public IHttpActionResult PostToDoListEntry(ToDoListEntry toDoListEntry)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.ToDoListEntries.Add(toDoListEntry);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = toDoListEntry.ToDoListEntryId }, toDoListEntry);
        }

        // DELETE: api/ToDoListEntries/5
        [ResponseType(typeof(ToDoListEntry))]
        public IHttpActionResult DeleteToDoListEntry(int id)
        {
            ToDoListEntry toDoListEntry = db.ToDoListEntries.Find(id);
            if (toDoListEntry == null)
            {
                return NotFound();
            }

            db.ToDoListEntries.Remove(toDoListEntry);
            db.SaveChanges();

            return Ok(toDoListEntry);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ToDoListEntryExists(int id)
        {
            return db.ToDoListEntries.Count(e => e.ToDoListEntryId == id) > 0;
        }
    }
}