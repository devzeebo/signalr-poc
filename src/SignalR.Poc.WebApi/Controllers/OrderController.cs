using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace SignalR.Poc.WebApi.Controllers
{
    [ApiController]
    [Route("api/orders")]
    public class OrderController : ControllerBase
    {
        readonly ISignalRHub _hub;

        public OrderController(ISignalRHub hub)
        {
            _hub = hub;
        }

        [HttpPost, Route("{orderId}/cancel")]
        public ActionResult Cancel(string orderId)
        {
            _hub.SendMessage("app/order-canceled", new
            {
                Id = orderId
            });

            return Ok();
        }

        [HttpPost, Route("")]
        public ActionResult CreateOrder()
        {
            var random = new Random();

            _hub.SendMessage("app/order-created", new
            {
                Order = new
                {
                    Id = $"{random.Next(1000)}",
                    DateCreated = DateTime.UtcNow,
                    LineItems = new[] {
                        new {
                            Id = $"i{random.Next(1000)}",
                            Sku = $"{random.Next(10)}-{random.Next(10000)}",
                            Quantity = random.Next(10),
                        }
                    }
                }
            });

            return Ok();
        }
    }
}